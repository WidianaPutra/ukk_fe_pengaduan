import PsBadge from "@/components/Ps/PsBedge";
import PsButton from "@/components/Ps/PsButton";
import PsInput from "@/components/Ps/PsInput";
import PsSVG from "@/components/Ps/PsSVG";
import PsTextArea from "@/components/Ps/PsTextArea";

export default function Home() {
  return (
    <div className="px-3">
      <h1 className="">Hallo, World</h1>
      <PsButton variant="primary">Acumala</PsButton>
      {/*  */}
      <PsInput label="Testing" error="testing testing" />
      <PsTextArea fullHegiht={true} fullWidth={true} label="Testing" />
      <PsBadge>Hallo, World</PsBadge>
      {/*  */}
      <PsSVG name="mail" />
    </div>
  );
}
