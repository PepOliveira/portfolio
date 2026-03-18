import Skills from "@/components/Skills";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Projects from "../components/Projects/Projects";
import Experience from "@/components/Experience/Experience";

 

export default function Home() {

  return (

    <Layout>
          
      <Profile />

      <Skills />

      <Projects />

      <Experience/>

    </Layout>

  );

}