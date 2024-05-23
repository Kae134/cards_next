import Image from "next/image";
import Card from "./components/card/Card"
import Form from "./components/form/Form";


export default function Home() {
  return (
    <main>
      <Form />
      <Card />
    </main>
  );
}
