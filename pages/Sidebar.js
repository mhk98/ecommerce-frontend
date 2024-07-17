import React, { useState } from "react";
import {
  Card,
  List,
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { FaBaby, FaBars } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import {
  MdDevices,
  MdOutlineBroadcastOnHome,
  MdOutlineHealthAndSafety,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { BiMaleFemale } from "react-icons/bi";
import { LuBaggageClaim } from "react-icons/lu";

const MyComponent = () => {
  const [open, setOpen] = useState(1); // Set default state to open

  const handleOpen = (id) => {
    setOpen(open === id ? 0 : id);
  };

  return (
    <Card className="h-full w-full max-w-[18rem] shadow-xl shadow-blue-gray-900/5">
      <List>
        <Accordion open={open === 1}>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 bg-[#E00011]"
            >
              <ListItemPrefix>
                <FaBars className="text-white" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-white">
                All Departments
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <FcElectronics />
                </ListItemPrefix>
                Electronic Accessories
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdDevices />
                </ListItemPrefix>
                Electronics Device
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdOutlineLocalGroceryStore />
                </ListItemPrefix>
                Groceries
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdOutlineHealthAndSafety />
                </ListItemPrefix>
                Health & Beauty
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <IoHomeOutline />
                </ListItemPrefix>
                Home & Lifestyle
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <BiMaleFemale />
                </ListItemPrefix>
                Mens & Boys Fashion
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaBaby />
                </ListItemPrefix>
                Mother & Baby
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdOutlineBroadcastOnHome />
                </ListItemPrefix>
                TV & Home Appliances
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <BiMaleFemale />
                </ListItemPrefix>
                Womens & Girls Fashion
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <LuBaggageClaim />
                </ListItemPrefix>
                Watches, Bags, Jewellery
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
};

export default MyComponent;
