import React from 'react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DropDown from '../icons/DropDown';
import { deleteAddress } from '@/utils/api/deleteAddress';
import toast from 'react-hot-toast';
import axios from 'axios';
interface AddressBoxProps {
  idAddress: number;
  state: string;
  city: string;
  last_name: string;
  first_name: string;
  postal_code: string;
  mobile: string;
  full_address: string;
  refetch: () => void;

}
const AddressBox: React.FC<AddressBoxProps> = ({ idAddress, state, city, last_name, first_name, postal_code, mobile, full_address, refetch }) => {
  return (
    <div className='py-5 px-4 bg-light-gray borde border-lightGrayBlue2 rounded-2xl'>
      <div className='flex items-center justify-between'>
        <h3 className='text-charcoal'>{full_address}</h3>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className='bg-transparent border-none outline-none'><DropDown /> </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" >
            <DropdownMenuGroup>

              <DropdownMenuItem dir='rtl' onClick={() => {
                deleteAddress(idAddress)
                  .then((res) => {
                    if (res.success) {
                      toast.success(res.data.message);
                      refetch()
                    } else {
                      toast.error(res.data.message);
                    }
                  })
                  .catch((error) => {
                    if (axios.isAxiosError(error)) {
                      toast.error(error.response?.data?.message || 'An error occurred');
                    } else {
                      toast.error('An unexpected error occurred');
                    }
                  });



              }}>
                حذف آدرس
              </DropdownMenuItem>


            </DropdownMenuGroup>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='text-charcoal text-sm'>

        <p className='max-md:text-sm	'> {state} - {city}</p>
        <p className='max-md:text-xs	'>  کدپستی: {postal_code}
        </p>
        <p className='max-md:text-xs	'>تلفن: {mobile}
        </p>
        <p className='max-md:text-xs	'>تحویل گیرنده:  {last_name + " " + first_name}
        </p>
      </div>
 
    </div>
  );
};

export default AddressBox;