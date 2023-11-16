import Student from "../models/student.model.js";
import Company from '../models/company.model.js';

  

function isAvailable(availability, matchedcompany){
    if(availability[matchedcompany]>0){
        return true;
    }else{
        return false;
    }
}
export const MatchStudentByCGPA = async(company, number)=>{
    const students= await Student.find({}).sort({CGPA:-1});
    // console.log(students);
    const companies =await Company.find({});
    var availability={}
    var match={}
    companies.map((company)=>{
       availability[company._id]=company.minInterns;
       match[company._id]=[];
    })
    availability[company._id]=availability[company]+number;
    
    students.map((student)=>{
        var matchedfirstcompany=student.companyPreferences.find(prefer=>prefer.key==1);
        var matchedSecondcompany=student.companyPreferences.find(prefer=>prefer.key==2);
        var matchedthirdcompany=student.companyPreferences.find(prefer=>prefer.key==3);
        console.log(matchedfirstcompany, matchedSecondcompany, matchedthirdcompany)
        if(matchedfirstcompany, matchedSecondcompany, matchedthirdcompany){
            if(isAvailable(availability, matchedfirstcompany.value)){
                match[matchedfirstcompany.value].push(student._id);
                availability[matchedfirstcompany.value]=availability[matchedfirstcompany.value]-1;
            }else if(isAvailable(availability, matchedSecondcompany.value)){
                match[matchedSecondcompany.value].push(student._id);
                availability[matchedSecondcompany.value]=availability[matchedSecondcompany.value]-1;
            }else if(isAvailable(availability, matchedthirdcompany.value)){
                match[matchedthirdcompany.value].push(student._id);
                availability[matchedthirdcompany.value]=availability[matchedthirdcompany.value]-1;
            }
        }
        
    })
    return match;
}


function calculateScoreScore(student, company){
    const weight_cgpa = 7;
    const weight_domain = 3;

    const cgpa=(student.CGPA/4)*weight_cgpa;

    var domainScore=0;
    if(company.requiredDomain){
      company.requiredDomain.forEach(domain => {
        var matchedDomain=student.domainPreferences.find(prefer=>prefer.value==domain.domain);
        if(matchedDomain){domainScore=domainScore+(4-matchedDomain.key)*0.1}
        
    });
    }
    
    domainScore=domainScore*weight_domain;

    const total=cgpa+domainScore;
    return total;
    
}


async function createCompanypreference(companies){
    var comapanyPreference={};
    const students=await Student.find({currentStatus:null});
    companies.forEach((company)=>{
        comapanyPreference[company._id]=[];
        students.forEach((student)=>{
            var score=calculateScoreScore(student, company)
            comapanyPreference[company._id].push({student:student._id , score: score});
        })
        comapanyPreference[company._id].sort((a, b)=>{ b.score-a.score})
        
    })
    return comapanyPreference;
    
}

//now stable marriage
export const MatchStudentByAlgorithm = async (company, number)=>{
    console.log("In this function");
    var companyPreferences;
    var matches={};
    var companyAvaivality={};
    var StudentFree={};
    const students=await Student.find({currentStatus:null, companyPreferences:{$exists:true,$ne:[]}}); // $expr: { $ne: [{ $size: "$companyPreferences" }, 0] }
    const companies=await Company.find({status:"Hiring"});
    companyPreferences=await createCompanypreference(companies);
    var NumberofFreeStudents=students.length;
    companies.forEach((element)=>{
        companyAvaivality[element._id]=element.minInterns;
        matches[element._id]=[];
    })
    companyAvaivality[company]=companyAvaivality[company]+number;

    students.forEach((element)=>{
        StudentFree[element._id]=true;
    })

    while(NumberofFreeStudents>0){
        var currentStudent=null;
        students.forEach((student)=>{
            console.log("Student Avaialable",student._id, StudentFree[student._id]);
            if(StudentFree[student._id]){
                currentStudent=student;
            }
        })
        for(let i=1; i<=currentStudent.companyPreferences.length && currentStudent;i++){
            console.log("I", i);
            var preferedCompany=currentStudent.companyPreferences.find((prefer)=>prefer.key==i);
            if(matches[preferedCompany.value].length<companyAvaivality[preferedCompany.value]){
                var StudentScore=companyPreferences[preferedCompany.value].find(element=>element.student.equals(currentStudent._id));
                matches[preferedCompany.value].push({student:currentStudent._id, score:StudentScore.score});
                StudentFree[currentStudent._id]=false;
                NumberofFreeStudents=NumberofFreeStudents-1;
                // console.log("End of logic one");
                break;
            }else{
                var StudentScore=companyPreferences[preferedCompany.value].find(element=>element.student==currentStudent._id);
                matches[preferedCompany.value].sort((a,b)=>b.score-a.score);
                var minScoreStudent=matches[preferedCompany.value].pop();
                if(minScoreStudent.score<StudentScore.score){
                    matches[preferedCompany.value].push({student:currentStudent._id, score:StudentScore.score});
                    StudentFree[currentStudent._id]=false;
                    StudentFree[minScoreStudent.student]=true;
                    // console.log("End of logic two");
                    break;
                }else{
                    matches[preferedCompany.value].push(minScoreStudent);
                    // console.log("End of logic three");
                    if(i==3){
                        StudentFree[currentStudent._id]=false;
                        NumberofFreeStudents=NumberofFreeStudents-1;
                        // console.log("Student is forcefully set to false")
                    }
                }
  
            }
        }
        // console.log("End of for loop inside while");
    }

    // return matches;
    console.log("matches", matches)
    // res.status(200).json({matches})
    return matches;
}

