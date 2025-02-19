import Job from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;

    if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
      return res.status(400).json({ message: "Missing required fields", success: false });
    }

    // Ensure requirements is an array
    const requirementsArray = Array.isArray(requirements) ? requirements : requirements.split(",");

    const newJob = new Job({
      title,
      description,
      requirements: requirementsArray,  // Now requirements is always an array
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    });

    await newJob.save();

    return res.status(201).json({ message: "Job posted successfully", success: true, job: newJob });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong", success: false });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    console.log("Query:", query);

    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });

    console.log("Jobs found:", jobs);

    if (jobs.length === 0) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};


export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);  // Corrected to 'Job'

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }

    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });  // Corrected to 'Job'

    if (jobs.length === 0) {  // Check for empty results
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};
