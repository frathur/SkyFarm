// import { useState } from "react";
// import { Check, ArrowRight, Info, MapPin, Building, User, Farm, Mail, Phone } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const ResearchSignup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     organization: "",
//     role: "",
//     location: "",
//     farmType: "",
//     farmSize: "",
//     experience: "",
//     interests: [],
//     researchGoal: "",
//     hearAbout: "",
//     consent: false,
//   });

//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value
//     }));
//   };

//   const handleInterestChange = (interest) => {
//     setFormData(prevData => {
//       const newInterests = [...prevData.interests];
//       if (newInterests.includes(interest)) {
//         return {
//           ...prevData,
//           interests: newInterests.filter(i => i !== interest)
//         };
//       } else {
//         return {
//           ...prevData,
//           interests: [...newInterests, interest]
//         };
//       }
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real application, you would submit the data to your backend here
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const researchInterests = [
//     "Soil Analysis",
//     "Crop Disease Detection",
//     "Water Management",
//     "Resource Optimization",
//     "Climate Adaptation",
//     "Yield Prediction"
//   ];

//   return (
//     <section className="py-16 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">Research Initiative Signup</h1>
//           <div className="w-24 h-1 bg-skyfarm-blue mx-auto mb-6"></div>
//           <p className="text-gray-700 max-w-3xl mx-auto">
//             Join SkyFarm's research initiative and help shape the future of precision agriculture in Africa. 
//             Your insights and feedback will be invaluable in developing our drone technology.
//           </p>
//         </div>

//         {submitted ? (
//           <Card className="max-w-2xl mx-auto shadow-xl border-none overflow-hidden">
//             <div className="h-3 bg-gradient-to-r from-skyfarm-blue to-skyfarm-green"></div>
//             <CardContent className="p-8">
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
//                   <Check className="h-8 w-8 text-green-600" />
//                 </div>
//                 <h2 className="text-2xl font-bold mb-4">Thank You For Your Interest!</h2>
//                 <p className="text-gray-600 mb-6">
//                   We've received your application to join our agricultural drone research initiative. 
//                   Our team will review your information and contact you within 5-7 business days to discuss the next steps.
//                 </p>
//                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800 mb-6 w-full">
//                   <p className="flex items-start">
//                     <Info className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
//                     <span>
//                       As part of our research phase, we're carefully selecting participants who represent diverse agricultural contexts across Africa. Your participation will help us ensure our technology addresses real-world challenges.
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ) : (
//           <Card className="max-w-2xl mx-auto shadow-xl border-none overflow-hidden">
//             <div className="h-3 bg-gradient-to-r from-skyfarm-blue to-skyfarm-green"></div>
//             <CardContent className="p-8">
//               {/* Progress Bar */}
//               <div className="mb-8">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm text-gray-500">Step {step} of 3</span>
//                   <span className="text-sm text-gray-500">{Math.round((step/3) * 100)}% Complete</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-skyfarm-blue to-skyfarm-green" 
//                     style={{ width: `${(step/3) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>
              
//               <form onSubmit={handleSubmit}>
//                 {step === 1 && (
//                   <div className="space-y-6">
//                     <h2 className="text-xl font-bold mb-6 flex items-center">
//                       <User className="mr-2 h-5 w-5" /> Personal Information
//                     </h2>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           required
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                           value={formData.name}
//                           onChange={handleChange}
//                         />
//                       </div>
                      
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           required
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </div>
                      
//                       <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
//                         <div className="relative">
//                           <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//                           <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             required
//                             className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                             value={formData.phone}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>
                      
//                       <div>
//                         <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location (Country/Region) *</label>
//                         <div className="relative">
//                           <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//                           <input
//                             type="text"
//                             id="location"
//                             name="location"
//                             required
//                             className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                             value={formData.location}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <button
//                       type="button"
//                       onClick={nextStep}
//                       className="w-full mt-6 flex items-center justify-center bg-skyfarm-blue hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors"
//                     >
//                       Continue
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                   </div>
//                 )}
                
//                 {step === 2 && (
//                   <div className="space-y-6">
//                     <h2 className="text-xl font-bold mb-6 flex items-center">
//                       <Building className="mr-2 h-5 w-5" /> Organization & Agricultural Experience
//                     </h2>
                    
//                     <div className="space-y-6">
//                       <div>
//                         <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
//                         <input
//                           type="text"
//                           id="organization"
//                           name="organization"
//                           required
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                           value={formData.organization}
//                           onChange={handleChange}
//                         />
//                       </div>
                      
//                       <div>
//                         <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role *</label>
//                         <input
//                           type="text"
//                           id="role"
//                           name="role"
//                           required
//                           placeholder="e.g., Farm Owner, Agricultural Scientist, etc."
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                           value={formData.role}
//                           onChange={handleChange}
//                         />
//                       </div>
                      
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <label htmlFor="farmType" className="block text-sm font-medium text-gray-700 mb-1">Type of Agriculture</label>
//                           <select
//                             id="farmType"
//                             name="farmType"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                             value={formData.farmType}
//                             onChange={handleChange}
//                           >
//                             <option value="">Select Type</option>
//                             <option value="Crop Farming">Crop Farming</option>
//                             <option value="Mixed Farming">Mixed Farming</option>
//                             <option value="Livestock">Livestock</option>
//                             <option value="Agroforestry">Agroforestry</option>
//                             <option value="Research Institution">Research Institution</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
                        
//                         <div>
//                           <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-1">Farm/Land Size (if applicable)</label>
//                           <select
//                             id="farmSize"
//                             name="farmSize"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                             value={formData.farmSize}
//                             onChange={handleChange}
//                           >
//                             <option value="">Select Size</option>
//                             <option value="Less than 2 hectares">Less than 2 hectares</option>
//                             <option value="2-10 hectares">2-10 hectares</option>
//                             <option value="10-50 hectares">10-50 hectares</option>
//                             <option value="50-200 hectares">50-200 hectares</option>
//                             <option value="More than 200 hectares">More than 200 hectares</option>
//                             <option value="Not applicable">Not applicable</option>
//                           </select>
//                         </div>
//                       </div>
                      
//                       <div>
//                         <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Experience in Agriculture *</label>
//                         <select
//                           id="experience"
//                           name="experience"
//                           required
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                           value={formData.experience}
//                           onChange={handleChange}
//                         >
//                           <option value="">Select Experience</option>
//                           <option value="Less than 2 years">Less than 2 years</option>
//                           <option value="2-5 years">2-5 years</option>
//                           <option value="5-10 years">5-10 years</option>
//                           <option value="10-20 years">10-20 years</option>
//                           <option value="More than 20 years">More than 20 years</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-between mt-6">
//                       <button
//                         type="button"
//                         onClick={prevStep}
//                         className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//                       >
//                         Back
//                       </button>
//                       <button
//                         type="button"
//                         onClick={nextStep}
//                         className="bg-skyfarm-blue hover:bg-blue-600 text-white py-2 px-6 rounded-md flex items-center transition-colors"
//                       >
//                         Continue
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
                
//                 {step === 3 && (
//                   <div className="space-y-6">
//                     <h2 className="text-xl font-bold mb-6 flex items-center">
//                       <Farm className="mr-2 h-5 w-5" /> Research Interests & Participation
//                     </h2>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-3">
//                         Research Areas of Interest (Select all that apply) *
//                       </label>
//                       <div className="grid grid-cols-2 gap-3">
//                         {researchInterests.map((interest) => (
//                           <div key={interest} className="flex items-center">
//                             <input
//                               type="checkbox"
//                               id={interest.replace(/\s+/g, '')}
//                               className="h-4 w-4 text-skyfarm-blue focus:ring-skyfarm-blue border-gray-300 rounded"
//                               checked={formData.interests.includes(interest)}
//                               onChange={() => handleInterestChange(interest)}
//                             />
//                             <label htmlFor={interest.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-700">
//                               {interest}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label htmlFor="researchGoal" className="block text-sm font-medium text-gray-700 mb-1">
//                         What do you hope to gain from participating in this research? *
//                       </label>
//                       <textarea
//                         id="researchGoal"
//                         name="researchGoal"
//                         rows="3"
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                         value={formData.researchGoal}
//                         onChange={handleChange}
//                       ></textarea>
//                     </div>
                    
//                     <div>
//                       <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">
//                         How did you hear about SkyFarm's research initiative?
//                       </label>
//                       <select
//                         id="hearAbout"
//                         name="hearAbout"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-skyfarm-blue focus:border-skyfarm-blue"
//                         value={formData.hearAbout}
//                         onChange={handleChange}
//                       >
//                         <option value="">Select Option</option>
//                         <option value="Social Media">Social Media</option>
//                         <option value="Word of Mouth">Word of Mouth</option>
//                         <option value="Agricultural Event">Agricultural Event</option>
//                         <option value="Online Search">Online Search</option>
//                         <option value="News Article">News Article</option>
//                         <option value="Partner Organization">Partner Organization</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
                    
//                     <div className="pt-4">
//                       <div className="flex items-start">
//                         <input
//                           type="checkbox"
//                           id="consent"
//                           name="consent"
//                           required
//                           className="h-4 w-4 mt-1 text-skyfarm-blue focus:ring-skyfarm-blue border-gray-300 rounded"
//                           checked={formData.consent}
//                           onChange={handleChange}
//                         />
//                         <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
//                           I understand that by submitting this form, I am expressing interest in SkyFarm's research initiative. 
//                           I consent to being contacted about participation in this research. *
//                         </label>
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-between mt-6">
//                       <button
//                         type="button"
//                         onClick={prevStep}
//                         className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//                       >
//                         Back
//                       </button>
//                       <button
//                         type="submit"
//                         className="bg-skyfarm-green hover:bg-green-600 text-white py-2 px-6 rounded-md flex items-center transition-colors"
//                       >
//                         Submit Application
//                         <Check className="ml-2 h-4 w-4" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ResearchSignup;