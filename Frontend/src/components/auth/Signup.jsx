import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";


const USER_API_END_POINT = "http://localhost:4000/api/v1/user"; // Update your endpoint

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  
  const { loading } = useSelector((state) => state.auth);
  const dispatch=useDispatch()

  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  // Validation logic
  const validateForm = () => {
    // Reset error before validation
    setError("");

    if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
      setError("Please fill in all the fields.");
      return false;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(input.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Validate phone number format (basic example, adjust as needed)
    const phoneRegex = /^[0-9]{10}$/; // A simple 10-digit phone number check
    if (!phoneRegex.test(input.phoneNumber)) {
      setError("Please enter a valid phone number (10 digits).");
      return false;
    }

    // Password length validation (adjust according to your requirements)
    if (input.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Fixed typo here (perventDefault -> preventDefault)
    console.log(input);

    // Validate form before proceeding
    if (!validateForm()) {
      return;
    }

    // Prepare form data if file is included, otherwise just JSON
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      console.log(input);
      dispatch(setLoading(true));
      // Sending the form data to the backend (adjust as necessary)
      const res = await axios.post(`${USER_API_END_POINT}/register`, input );

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
    finally{
      dispatch(setLoading(false))
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}

          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Fullname"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="0123456789"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder=""
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <label>Profile</label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>

          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Signup
            </Button>
          )}
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;





// // import React, { useState } from "react";
// // import Navbar from "../shared/Navbar";
// // import { Label } from "@/components/ui/label";
// // import { Input } from "@/components/ui/input";
// // import { RadioGroup } from "@radix-ui/react-radio-group";
// // import { Button } from "../button";
// // import { Link, useNavigate} from "react-router-dom";
// // import axios from "axios";
// // import { toast } from "sonner";

// // const Signup = () => {
// //   const [input, setInput] = useState({
// //       fullname:"",
// //       email:"",
// //       phoneNumber:"",
// //       password:"",
// //       role:"",
// //       file:"",
  
// //     });

// //     const navigate = useNavigate();
  
// //     const changeEventHandler = (e) => {
// //       setInput({...input, [e.target.name]:e.target.value});
  
// //     }  
// //     const changeFileHandler = (e) =>{
// //       setInput({...input, file:e.target.files?.[0]});
// //     }
// //     const submitHandler = async (e) => {
// //       e.perventDefault();
// //       const forData = new FormData();
// //       forData.append("fullname",input.fullname);
// //       forData.append("email",input.email);
// //       forData.append("phoneNumber",input.phoneNumber);
// //       forData.append("password",input.password);
// //       forData.append("role",input.role);
// //       if(input.file){
// //             forData.append("file",input.file);
// //       }
// //       try {
// //          const res=await axios.post(`${USER_API_END_POINT}/register`,forData,
// //           {
// //             headers:{
// //               "Content-Type":"multipart/form-data"
// //             },
// //             withCredentials:true,
// //           });
// //           if(res.data.success){
// //             navigate("/login");
// //             toast.success(res.data.message);
// //           }
// //       } catch (error) {
// //         console.log(error);
// //         toast.error(error.reponse.data.message);
// //       }
// //     }
// //   return (
// //     <div>
// //       <Navbar />
// //       <div className=" flex items-center justify-center max-w-7xl mx-auto">
// //         <form
// //           onSubmit={submitHandler}
// //           className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
// //         >
// //           <h1 className="font-bold text-xl  mb-5">Sign Up</h1>
// //           <div className=" my-2">
// //             <Label>Full Name</Label>
// //             <Input type="text"
// //              value={input.fullname}
// //              name="fullname"
// //              onChange={changeEventHandler}
// //              placeholder="Fullname" />
// //           </div>
// //           <div className=" my-2">
// //             <Label>Email</Label>
// //             <Input 
// //             type="email"
// //             value={input.email}
// //             name="email"
// //             onChange={changeEventHandler}
// //              placeholder="abc@gmail.com" />
// //           </div>
// //           <div className=" my-2">
// //             <Label>Phone Number</Label>
// //             <Input type="text" 
// //             value={input.phoneNumber}
// //             name="phoneNumber"
// //             onChange={changeEventHandler}
// //             placeholder="0123456789" />
// //           </div>
// //           <div className=" my-2">
// //             <Label>Password</Label>
// //             <Input type="password"
// //             value={input.password}
// //             name="password"
// //             onChange={changeEventHandler}
// //             placeholder="" />
// //           </div>

// //           <div className="flex items-center justify-between">
          
// //           <RadioGroup className="flex items-center gap-4 my-5" >
// //       <div className="flex items-center space-x-2">
// //         <Input
// //          type="radio" 
// //          name="role"
// //          value="student"
// //          checked={input.role == 'student'}
// //          onChange={changeEventHandler}
// //          className="cursor-pointer"
// //          />
// //         <Label htmlFor="student">Student</Label>
// //       </div>
// //       <div className="flex items-center space-x-2">
// //       <Input
// //          type="radio" 
// //          name="role"
// //          value="recruiter"
// //          checked={input.role == 'recruiter'}
// //          onChange={changeEventHandler}
// //          className="cursor-pointer"
// //          />
// //         <Label htmlFor="recruiter">Recruiter</Label>
// //       </div>
      
// //     </RadioGroup>
// //     <div className="flex items-center gap-2">
// //       <label >Profile</label>
// //       <Input 
// //       accept="image/*"
// //       type="file"
// //       onChange={changeFileHandler}
// //       className="cursor-pointer"
// //        />
// //      </div>
// //     </div>
// //      <Button type="submit" className="w-full my-4">Signup</Button>
// //      <span>
// //             Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
// //           </span>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;


// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { RadioGroup } from "@radix-ui/react-radio-group";
// import { Button } from "../button";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "sonner";

// const USER_API_END_POINT = "http://localhost:4000/api/v1/user"; // Update your endpoint

// const Signup = () => {
//   const [input, setInput] = useState({
//     fullname: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     role: "",
//     file: "",
//   });
//   const [error, setError] = useState(""); // State to store error messages
//   const navigate = useNavigate();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const changeFileHandler = (e) => {
//     setInput({ ...input, file: e.target.files?.[0] });
//   };

//   // Validation logic
//   const validateForm = () => {
//     // Reset error before validation
//     setError("");

//     if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
//       setError("Please fill in all the fields.");
//       return false;
//     }

//     // Validate email format
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(input.email)) {
//       setError("Please enter a valid email address.");
//       return false;
//     }

//     // Validate phone number format (basic example, adjust as needed)
//     const phoneRegex = /^[0-9]{10}$/; // A simple 10-digit phone number check
//     if (!phoneRegex.test(input.phoneNumber)) {
//       setError("Please enter a valid phone number (10 digits).");
//       return false;
//     }

//     // Password length validation (adjust according to your requirements)
//     if (input.password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return false;
//     }

//     return true;
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     console.log(input)

//     // Validate form before proceeding
//     if (!validateForm()) {
//       return;
//     }

//     // Prepare data to send
//     // const formData = new FormData();
//     // formData.append("fullname", input.fullname);
//     // formData.append("email", input.email);
//     // formData.append("phoneNumber", input.phoneNumber);
//     // formData.append("password", input.password);
//     // formData.append("role", input.role);
//     // if (input.file) {
//     //   formData.append("file", input.file);
//     // }
//     const formdata={
//       fullname:input.fullname,
//       email:input.email,
//       phoneNumber:input.phoneNumber,
//       password:input.password,
//       role:input.role,
//       file:input.file
//     }

//     try {
// // <<<<<<< recover
// //       const res = await axios.post(`${USER_API_END_POINT}/register`, input);
// //  console.log(res);
 
// // =======
//       console.log(formdata);
      
//       // const res = await axios.post(`${USER_API_END_POINT}/register`, formdata, {
//       //   headers: {
//       //     "Content-Type": "multipart/form-data",
//       //   },
//       //   withCredentials: true,
//       // });

//       const  res = await axios.post('http://localhost:4000/api/v1/user/register',formdata)
//   console.log(res);
  
 
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
//           <h1 className="font-bold text-xl mb-5">Sign Up</h1>

//           {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}

//           <div className="my-2">
//             <Label>Full Name</Label>
//             <Input
//               type="text"
//               value={input.fullname}
//               name="fullname"
//               onChange={changeEventHandler}
//               placeholder="Fullname"
//             />
//           </div>
//           <div className="my-2">
//             <Label>Email</Label>
//             <Input
//               type="email"
//               value={input.email}
//               name="email"
//               onChange={changeEventHandler}
//               placeholder="abc@gmail.com"
//             />
//           </div>
//           <div className="my-2">
//             <Label>Phone Number</Label>
//             <Input
//               type="text"
//               value={input.phoneNumber}
//               name="phoneNumber"
//               onChange={changeEventHandler}
//               placeholder="0123456789"
//             />
//           </div>
//           <div className="my-2">
//             <Label>Password</Label>
//             <Input
//               type="password"
//               value={input.password}
//               name="password"
//               onChange={changeEventHandler}
//               placeholder=""
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <RadioGroup className="flex items-center gap-4 my-5">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={input.role === "student"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="student">Student</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   checked={input.role === "recruiter"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="recruiter">Recruiter</Label>
//               </div>
//             </RadioGroup>
//             <div className="flex items-center gap-2">
//               <label>Profile</label>
//               <Input
//                 accept="image/*"
//                 type="file"
//                 onChange={changeFileHandler}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>

//           <Button type="submit" className="w-full my-4">
//             Signup
//           </Button>
//           <span>
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-600">
//               Login
//             </Link>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

