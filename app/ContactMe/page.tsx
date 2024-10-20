"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "../components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import Icons from "../Links/page"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors: FormErrors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.message.trim()) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length === 0) {
      // Here you would typically send the form data to a server
      console.log("Form submitted:", formData)
      alert("Thank you for your message! We'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white ">
      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white shadow-text">Get in Touch</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Contact Form */}
          <div className="bg-background p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-teal-600 dark:text-violet-700">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "border-red-500" : ""}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "border-red-500" : ""}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`h-32 ${formErrors.message ? "border-red-500" : ""}`}
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-teal-700 dark:bg-purple-700">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8 text-black  ">
            <div className="bg-background p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-teal-600 dark:text-violet-700">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
         
                  <Mail className="text-teal-600 dark:text-purple-600" />
                  <span>ygntechstartup@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-teal-600 dark:text-purple-600" />
                  <span>+91 8328313651</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-teal-600 dark:text-purple-600" />
                  <span>Vijayawada,Andhra Pradesh,India</span>
                </div>
                <div>
                  <Icons/>
                </div>
              </div>
            </div>

           
          </div>
          
        </div>
      </div>
    </div>
  )
}