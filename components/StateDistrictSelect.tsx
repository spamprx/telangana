"use client";

import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { indianStates } from '@/lib/india-states-districts';

interface StateDistrictSelectProps {
  onStateChange: (state: string) => void;
  onDistrictChange: (district: string) => void;
  showDistrict: boolean;
}

export default function StateDistrictSelect({ 
  onStateChange, 
  onDistrictChange, 
  showDistrict 
}: StateDistrictSelectProps) {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [districts, setDistricts] = useState<{ name: string; code: string; }[]>([]);

  useEffect(() => {
    if (selectedState) {
      const state = indianStates.find(s => s.code === selectedState);
      setDistricts(state?.districts || []);
      setSelectedDistrict('');
    }
  }, [selectedState]);

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    onStateChange(value);
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
    onDistrictChange(value);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <Select value={selectedState} onValueChange={handleStateChange}>
          <SelectTrigger id="state">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            {indianStates.map((state) => (
              <SelectItem key={state.code} value={state.code}>
                {state.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {showDistrict && selectedState && (
        <div className="space-y-2">
          <Label htmlFor="district">District</Label>
          <Select value={selectedDistrict} onValueChange={handleDistrictChange}>
            <SelectTrigger id="district">
              <SelectValue placeholder="Select district" />
            </SelectTrigger>
            <SelectContent>
              {districts.map((district) => (
                <SelectItem key={district.code} value={district.code}>
                  {district.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
} 