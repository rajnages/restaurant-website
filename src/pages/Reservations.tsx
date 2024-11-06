import React, { useState } from 'react';
import { format, addDays, isAfter, isBefore, parse } from 'date-fns';
import TableSelector from '../components/TableSelector';
import PaymentForm from '../components/PaymentForm';

interface ReservationForm {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

const Reservations = () => {
  const [step, setStep] = useState(1);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [formData, setFormData] = useState<ReservationForm>({
    date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    time: '19:00',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const availableTimes = [
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isDateValid = (date: string) => {
    const selectedDate = parse(date, 'yyyy-MM-dd', new Date());
    const minDate = addDays(new Date(), 1);
    const maxDate = addDays(new Date(), 30);
    return isAfter(selectedDate, minDate) && isBefore(selectedDate, maxDate);
  };

  const handlePaymentComplete = () => {
    // Here you would typically send the reservation data to your backend
    alert('Reservation confirmed! A confirmation email has been sent.');
    // Reset form and redirect to home
    window.location.href = '/';
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                max={format(addDays(new Date(), 30), 'yyyy-MM-dd')}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              >
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <TableSelector
            selectedTable={selectedTable}
            onSelectTable={setSelectedTable}
            date={formData.date}
            time={formData.time}
          />
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
              ></textarea>
            </div>
          </div>
        );
      case 4:
        return (
          <PaymentForm
            amount={25} // Deposit amount
            onPaymentComplete={handlePaymentComplete}
          />
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step === 2 && !selectedTable) {
      alert('Please select a table');
      return;
    }
    setStep(prev => prev + 1);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center mb-8">Make a Reservation</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="flex items-center">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <React.Fragment key={stepNumber}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNumber ? 'bg-stone-800 text-white' : 'bg-gray-200'
                    }`}>
                      {stepNumber}
                    </div>
                    {stepNumber < 4 && (
                      <div className="w-20 h-1 mx-2 bg-gray-200">
                        <div className={`h-full ${
                          step > stepNumber ? 'bg-stone-800' : 'bg-gray-200'
                        }`}></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-sm text-gray-600">
                {step === 1 && 'Select Date & Time'}
                {step === 2 && 'Choose Your Table'}
                {step === 3 && 'Your Details'}
                {step === 4 && 'Payment'}
              </p>
            </div>
          </div>

          {renderStepContent()}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(prev => prev - 1)}
                className="px-6 py-2 border border-stone-300 rounded-md text-stone-700 hover:bg-stone-50"
              >
                Back
              </button>
            )}
            {step < 4 && (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-8 py-3 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition duration-300"
              >
                {step === 3 ? 'Proceed to Payment' : 'Next'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;