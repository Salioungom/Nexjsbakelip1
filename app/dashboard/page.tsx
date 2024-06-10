import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CardContent from "@/components/CardContent";

export default function page() {
  return (
    <div>
      <Container>
        <Header />
        <Hero />
      </Container>
      <CardContent />
    </div>
  );
}
