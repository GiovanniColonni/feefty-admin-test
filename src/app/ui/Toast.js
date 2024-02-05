import { toast_ok,toast_notok } from "./icons";

export function Toast({ show, message, ok  }) {

  if (!show) return null

  return (
    <div className="fixed opacity-0 animate-toastAppear flex items-center border-black gap-2 top-4 left-1/2 transform -translate-x-1/2 z-50 pt-[0.5625rem] pb-[0.5625rem] px-3 w-[21.4375rem] rounded-sm bg-white">
      {ok? toast_ok: toast_notok}
      <span className="text-[#0e1823] text-sm leading-[120%]">{message}</span>
    </div>
  );
}


