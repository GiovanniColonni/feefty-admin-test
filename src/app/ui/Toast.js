export function GoodToast({show,message,onClose}){
    
    if(!show) return null

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-black text-white rounded-md shadow-lg">
          <div className="flex items-center justify-between">
            <span>{message}</span>
            <button onClick={onClose} className="ml-4">
              <span className="text-lg">&times;</span>
            </button>
          </div>
        </div>
      );
}