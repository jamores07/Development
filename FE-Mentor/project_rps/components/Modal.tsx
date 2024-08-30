/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className={`${open ? "backdrop-blur-lg" : ""}`}
      >
        Rules
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src={require("@/public/assets/icon-close.svg")}
                      alt="close-icon"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Image
                      src={require("@/public/assets/image-rules.svg")}
                      alt="rules"
                    />
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
