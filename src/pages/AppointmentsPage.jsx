import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Clock } from 'lucide-react';

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  date: z.date(),
  time: z.string().min(1, 'Please select a time slot')
});

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00', '17:00'
];

const EMAILJS_PUBLIC_KEY = 'OnF_mckeDR8wDEbwE';
const EMAILJS_SERVICE_ID = 'service_fstdplu';
const EMAILJS_TEMPLATE_ID = 'template_paiecy7';
const EMAILJS_TEMPLATE_ID_USER_CONFIRMATION = 'template_2t143it';

export function AppointmentsPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
      time: ''
    }
  });

  const selectedDate = watch('date');

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        date: format(data.date, 'yyyy-MM-dd'),
        appointmentDateTime: `${format(data.date, 'yyyy-MM-dd')} ${data.time}`
      };

      // Admin notification email
      const adminEmailParams = {
        to_email: 'awsmjp8090@gmail.com',
        from_name: `${formattedData.firstName} ${formattedData.lastName}`,
        from_email: formattedData.email,
        phone: formattedData.phone,
        date: format(data.date, 'MMMM d, yyyy'),
        time: data.time,
        message: `New appointment scheduled for ${formattedData.appointmentDateTime}`
      };

      // User confirmation email
      const userEmailParams = {
        to_email: formattedData.email,
        to_name: `${formattedData.firstName} ${formattedData.lastName}`,
        from_name: 'DreamLivin',
        date: format(data.date, 'MMMM d, yyyy'),
        time: data.time,
        message: 'Thank you for scheduling with us.'
      };

      // Send both emails
      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, adminEmailParams, EMAILJS_PUBLIC_KEY),
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_USER_CONFIRMATION, userEmailParams, EMAILJS_PUBLIC_KEY)
      ]);

      alert('Appointment scheduled successfully! A confirmation email has been sent to your email address.');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to schedule appointment. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-white" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:info@dreamlanding.co.uk" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    info@dreamlanding.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a 
                    href="tel:+442012345678" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    +44 (20) 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-white" />
                <div>
                  <h3 className="font-semibold text-white">Business Hours</h3>
                  <div className="text-blue-100">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Schedule an Appointment</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  {...register('firstName')}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName')}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">
                      Select Date
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setValue('date', date)}
                      minDate={new Date()}
                      dateFormat="MMMM d, yyyy"
                      calendarIcon={null}
                      className="w-full h-[42px] px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">
                      Select Time Slot
                    </label>
                    <select
                      {...register('time')}
                      className="w-full h-[42px] px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 px-6 rounded-md hover:bg-white/20 transition-colors"
                >
                  Schedule Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}