import { useEffect } from "react";

export default function Modal({
  width = 40,
  title = "title",
  children,
  open,
  onClose,
}) {
  useEffect(() => {
    const handlePressEsc = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handlePressEsc);

    return () => {
      document.removeEventListener("keydown", handlePressEsc);
    };
  }, [onClose]);

  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-30 "></div>
          <div
            className="fixed inset-0 z-30 flex items-center justify-center"
            onMouseDown={onClose}
          >
            <div
              className="bg-[#f0f2f5] rounded-lg shadow-lg max-w-xl sm:min-w-sm md:max-w-2xl lg:max-w-4xl pb-4 mx-4 sm:mx-auto"
              style={{ width: `${width}rem` }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-400 bg-secondary-color shadow-md rounded-t-lg">
                <span className="invisible"></span>
                <h5 className="text-2xl font-medium text-black">{title}</h5>
                <button
                  onClick={onClose}
                  className="text-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                >
                  &times;
                </button>
              </div>
              <div
                className="p-6 overflow-y-auto min-h-[200px]"
                style={{ maxHeight: "80vh" }}
              >
                {children}
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="p-3 rounded-md text-white font-semibold bg-red-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
