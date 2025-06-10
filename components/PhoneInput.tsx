"use client";

import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import type { E164Number } from 'libphonenumber-js/core';
import { Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Label } from '@/components/ui/label';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onCountryChange: (isIndian: boolean) => void;
}

export default function CustomPhoneInput({ value, onChange, onCountryChange }: PhoneInputProps) {
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(value as E164Number);
  const [country, setCountry] = useState<Country | undefined>('IN');

  useEffect(() => {
    const isIndianNumber = country === 'IN';
    onCountryChange(isIndianNumber);
  }, [country, onCountryChange]);

  const handleChange = (newValue: E164Number | undefined) => {
    setPhoneNumber(newValue);
    onChange(newValue || '');
  };

  const handleCountryChange = (newCountry: Country) => {
    setCountry(newCountry);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="phone">Phone Number</Label>
      <div className="relative">
        <PhoneInput
          international
          defaultCountry="IN"
          value={phoneNumber}
          onChange={handleChange}
          onCountryChange={handleCountryChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <style jsx global>{`
        .PhoneInput {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }
        .PhoneInputCountry {
          display: flex;
          align-items: center;
          padding-left: 0.75rem;
          padding-right: 0.5rem;
        }
        .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .PhoneInputCountryIcon--border {
          box-shadow: none;
          background-color: transparent !important;
        }
        .PhoneInputCountrySelectArrow {
          margin-left: 0.5rem;
          width: 0.5rem;
          opacity: 0.5;
        }
        .PhoneInputInput {
          flex: 1;
          border: none;
          padding: 0.5rem;
          font-size: 0.875rem;
          background: transparent;
          outline: none;
        }
        .PhoneInput--focus {
          outline: 2px solid rgb(var(--ring));
          outline-offset: 2px;
        }
        .PhoneInputCountrySelect {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 5rem;
          z-index: 1;
          opacity: 0;
        }
      `}</style>
    </div>
  );
} 