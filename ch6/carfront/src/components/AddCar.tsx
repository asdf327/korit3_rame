import {Dialog, DialogActions, DialogTitle, Button } from "@mui/material"
import { Car } from "../types"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar } from "../api/carapi";
import CarDialogContent from "./CarDialogContent";

export default function AddCar() {
  const [open, setOpen] = useState(false);
    const[car, setCar] = useState<Car>({
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 0,
      price: 0,
    });
    const queryClient= useQueryClient();

    const {mutate} = useMutation(addCar, {
      onSuccess: () => {
        queryClient.invalidateQueries(['cars']);
      },
      onError: (err) => console.log(err),
    });

    //자동차를 저장하고 모달 폼을 닫을 수 있도록
    const handieSave=() => {
      mutate(car);
      setCar({
        brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 0,
      price: 0,
      });
      handleClose();
    }

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    {
      setCar({...car, [event.target.name]: event.target.value})
    }

  return(
    <>
      <Button onClick={handleClickOpen} variant='outlined'>New Car</Button> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />


        {/* <DialogContent>
          <input placeholder="Brand" name="brand" value={car.brand}
          onChange={handleChange} />
          <br />
          <input placeholder="Model" name="model" value={car.model}
          onChange={handleChange} />
          <br />
          <input placeholder="Color" name="color" value={car.color}
          onChange={handleChange} />
          <br />
          <input placeholder="Reg.nr" name="registrationNumber" 
          value={car.registrationNumber}
          onChange={handleChange} />
          <br />
          <input placeholder="Year" name="modelYear" value={car.modelYear}
          onChange={handleChange} />
          <br />
          <input placeholder="Price" name="price" value={car.price}
          onChange={handleChange} />
          <br />
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handieSave}>저장</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}