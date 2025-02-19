import { Company } from "../models/company.model.js";
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        sucess: false,
      });
    }
    let company = await Company.findOne({ nam: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't regiter same company. ",
        sucess: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(202).json({
      message: "Company registered sucessfully.",
      company,
      sucess: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const compines = await Company.find({ userId });
    if (!compines) {
      return res.status(404).json({
        message: "Compines not found.",
        sucess: false,
      });
    }
    return res.status(200).json({
    compines,
        sucess: true,
      });
  } catch (error) {
    console.log(error);
  }
};

//get compny by id

export const getCompanyById = async (req, res) => {
  try {
    const compananyId = req.params.id;
    const company = await Company.findById(compananyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        sucess: false,
      });
    }
    return res.status(200).json({
      company,
      sucess: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, discription, website, location } = req.body;
    const file=req.file;

    const updateData={name,discription,website,location};

    const company=await Company.findByIdAndUpdate(req.params.id, updateData);
    if(!company){
        return res.status(404).json({
            message:"Company not found.",
            sucess:false
        })
    }
    return res.status(200).json({
        message:"Company information updated.",
        sucess:true
    })

} catch (error) {
    console.log(error)
  }
};
