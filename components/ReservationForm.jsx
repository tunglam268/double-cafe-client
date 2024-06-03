"use client"
import React, {useState} from "react";
import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent, SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {cn} from "@/lib/utils";
import {Input} from "./ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

const ReservationForm = () => {
    const [date, setDate] = useState(Date)
    return (
        <form className={`flex flex-col gap-y-10`}>
            <div className={'grid gap-[30px]'}>
                <div className={`grid grid-cols-1 xl:grid-cols-2 gap-[30px]`}>
                    <div>
                        <Label htmlFor={'name'}>Your name</Label>
                        <Input type={'name'} id='name'/>
                    </div>
                    <div>
                        <Label htmlFor={'phoneNumber'}>Phone Number</Label>
                        <Input type={'phoneNumber'} id='phoneNumber'/>
                    </div>
                </div>
                <div className={`grid grid-cols-1 xl:grid-cols-2 gap-[30px]`}>
                    {/*calendar*/}
                    <div>
                        <Label>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"input"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal")}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    {/*select*/}
                    <div>
                        <Label>Person</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="How many people do you have?"/>
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="6">6</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <Button className={`uppercase w-full xl:w-auto xl:self-end`}>Book a table</Button>
        </form>
    );
};

export default ReservationForm;