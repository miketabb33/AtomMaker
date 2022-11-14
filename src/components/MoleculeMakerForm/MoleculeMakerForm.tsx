import Button from "../Button/Button";
import TextField from "../TextField/TextField";

const MoleculeMakerForm = () => {
  return (
    <>
      <TextField value="" placeholder="Name" />
      <TextField value="" placeholder="Description" />
      <TextField value="" placeholder="Elements" />
      <Button>Add</Button>
    </>
  );
};

export default MoleculeMakerForm;
