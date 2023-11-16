import Report from '../models/report.model.js';

export const createReport = async (req, res, next) => {
  try {
    const reportData = req.body;
    const report = await Report.create(reportData);

    res.status(201).json({
      message: 'Report created successfully!',
      report,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find();

    res.status(200).json({
      reports,
    });
  } catch (error) {
    next(error);
  }
};

export const getReportByStudentId = async (req, res, next) => {
  try {
    const { student_id } = req.params;
    const report = await Report.findOne({ student_id });

    if (!report) {
      res.status(404).json({
        message: 'Report not found!',
      });
      return;
    }

    res.status(200).json({
      report,
    });
  } catch (error) {
    next(error);
  }
};

export const updateReportByStudentId = async (req, res, next) => {
  try {
    const { student_id } = req.params;
    const reportData = req.body;
    const report = await Report.findOneAndUpdate({ student_id }, reportData, { new: true });

    if (!report) {
      res.status(404).json({
        message: 'Report not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Report updated successfully!',
      report,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteReportByStudentId = async (req, res, next) => {
  try {
    const { student_id } = req.params;
    const report = await Report.findOneAndDelete({ student_id });

    if (!report) {
      res.status(404).json({
        message: 'Report not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Report deleted successfully!',
      report,
    });
  } catch (error) {
    next(error);
  }
};
