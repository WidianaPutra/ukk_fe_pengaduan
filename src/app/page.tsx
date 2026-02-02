import PsBadge from "@/components/Ps/PsBedge";
import PsButton from "@/components/Ps/PsButton";
import PsInput from "@/components/Ps/PsInput";
import PsTextArea from "@/components/Ps/PsTextArea";
import PsStudentLogin from "@/sections/Ps/PsStudentLogin";

export default function Home() {
  return (
    <div className="h-auto px-3">
      <h1 className="">Hallo, World</h1>
      <PsButton>Acumala</PsButton>
      {/*  */}
      <PsInput label="Testing" error="testing testing" />
      <PsTextArea fullHegiht={true} fullWidth={true} label="Testing" />
      <PsBadge>Hallo, World</PsBadge>
      <br />
      <br />

      <PsStudentLogin />
    </div>
  );
}
