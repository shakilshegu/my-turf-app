import Head from "next/head";
import AddTurfForm from "@/app/components/partner/AddTurfForm";

const NewTurfPage = () => {
  return (
    <main className="pt-16 pb-12">
      <Head>
        <title>Add New Turf | Turf Partner Dashboard</title>
        <meta name="description" content="Register your new turf facility" />
      </Head>
      <AddTurfForm />
    </main>
  );
};

export default NewTurfPage;
