// pages/landing.tsx
import Button from "../components/Button";
import Card from "@/components/Card";
const Landing: React.FC = () => {
  return (
    <div>
      <h1
        className="text-xl 
      <Card />
      font-extralight"
      >
        git Landing Page
      </h1>
      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default Landing;
