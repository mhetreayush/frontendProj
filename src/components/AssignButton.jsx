import { useState } from "react";
const AssignButton = () => {
  const [isAssigned, setIsAssigned] = useState("Assign");
  function assign() {
    setIsAssigned((prevState) => {
      if (prevState == "Assign") return (prevState = "Confirm?");
      else if (prevState == "Confirm?" || prevState == "Assigned")
        return (prevState = "Assigned");
    });
  }
  return (
    <button
      onClick={assign}
      className="px-6 py-2 bg-violetCustom rounded-md text-white font-bold"
    >
      {isAssigned}
    </button>
  );
};

export default AssignButton;
