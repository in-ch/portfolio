'use client';

import React, { createContext, useMemo, useContext, useEffect, useState, FC } from 'react';
import { useRecoilState } from 'recoil';

import { dialogState } from '@/atom';
import { GoToApp } from '@/components/modal/go-to-app.drawer';

export interface DialogData {
  title?: string;
  text?: string;
  event?: () => void;
  isAlert?: boolean;
  html?: React.ReactNode;
  maxWidth?: boolean;
  hideButton?: boolean;
}

interface Props {
  children: React.ReactNode;
}
interface ContextType {
  setDialog: (dialog: DialogData) => void;
}

const DialogContext = createContext<ContextType | null>(null);

const DialogProvider: FC<Props> = ({ children }: { children: React.ReactNode }) => {
  const [dialog, setDialog] = useState<DialogData | null>(null);
  const [atomDialogState, setAtomDialogState] = useRecoilState(dialogState);

  const handleCancel = () => {
    setDialog(null);
  };

  useEffect(() => {
    if (dialog) {
    }
  }, [dialog]);

  useEffect(() => {
    setDialog(null);
    setAtomDialogState(true);
  }, [atomDialogState, setAtomDialogState]);

  const value = useMemo(
    () => ({
      dialog,
      setDialog,
    }),
    [dialog, setDialog],
  );

  return (
    <DialogContext.Provider value={value}>
      {children}
      {dialog && (
        <div
          data-state={dialog ? 'open' : 'closed'}
          className="fixed inset-0 z-50 bg-black/50  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          <div
            data-state={dialog ? 'open' : 'closed'}
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg bg-white"
          >
            {dialog.html ? (
              <div>{dialog.html}</div>
            ) : (
              <div>
                <div id="AlertHeader" className="flex flex-col space-y-2 text-center sm:text-left">
                  <p className="text-xl font-semibold">{dialog.title}</p>
                  <p className="text-sm text-muted-foreground">{dialog.text}</p>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <button onClick={handleCancel} className="">
                Close
              </button>
              <GoToApp />
            </div>
          </div>
        </div>
      )}
    </DialogContext.Provider>
  );
};

const useDialog = (): ContextType => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('다이아로그 프로바이더로 감싸주세요.');
  }

  return context as ContextType;
};

export { DialogProvider, useDialog };
