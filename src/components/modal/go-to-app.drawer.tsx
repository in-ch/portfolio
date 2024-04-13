import * as React from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/drawer';

/**
 * @description Go To App 모달
 * @returns {JSX.Element}
 */
export function GoToApp() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>Go To App</button>
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <div className="flex w-full items-center justify-center">
          <div className="w-[50px] h-[6px] bg-[#e0e0e0] relative top-[-10px]" />
        </div>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Go To App</DrawerTitle>
            <DrawerDescription className="mt-2">Please Click Buttons</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button className="border rounded-[10px] bg-[#1f1f1f] text-white h-[40px]">
              Android
            </button>
            <button className="border rounded-[10px] bg-[#1f1f1f] text-white h-[40px]">IOS</button>
            <button className="border rounded-[10px] bg-[#1f1f1f] text-white h-[40px]">
              Github
            </button>
            <button className="border rounded-[10px] bg-[#1f1f1f] text-white h-[40px]">Web</button>
            <DrawerClose asChild>
              <button className="border rounded-[10px] bg-white h-[40px] shadow-lg">Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
