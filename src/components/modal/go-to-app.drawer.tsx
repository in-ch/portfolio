import * as React from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';

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
import { itemState } from '@/atom';
import { LinkType } from '@/types';

/**
 * @description Go To App 모달
 * @returns {JSX.Element}
 */
export function GoToApp() {
  const [itemRecoil] = useRecoilState(itemState);
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
            {itemRecoil.links.map((itemLink: LinkType) => {
              return (
                <Link
                  href={itemLink.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={`item-detail-link-${itemLink.title}`}
                >
                  <div className="w-full border rounded-[10px] bg-[#1f1f1f] flex justify-center">
                    <button className="text-white h-[40px]">{itemLink.title}</button>
                  </div>
                </Link>
              );
            })}
            <DrawerClose asChild>
              <button className="border rounded-[10px] bg-white h-[40px] shadow-lg">Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
