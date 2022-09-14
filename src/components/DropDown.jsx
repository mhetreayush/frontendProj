import { faker } from "@faker-js/faker";
const Dropdown = () => {
    let namesArray = [];
    for(let i=0; i<10; i++){
        namesArray[i] = faker.name.firstName() + " " + faker.name.lastName()
    }
    const optionsArray=namesArray.map(x=>{
        return(
            <option>
                {x}
            </option>
        )
    })
  return (
    <div>
        <select className="rounded-md bg-violetCustom font-semibold fill-white text-white">
            {optionsArray}
        </select>
    </div>
  );
};

export default Dropdown;
