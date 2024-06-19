import TestFile2 from "@/components/TestFile2";
import { Button, Card } from "@nextui-org/react";
import { Suspense } from "react";

const TestPage = () => {
  return (
    <div>
      <Button variant="solid" color="danger">Button comp</Button>
      <Card>Card comp</Card>
      <Suspense fallback={<div>Loading...</div>}>
        <TestFile2 />
      </Suspense>
    </div>
  );
};

export default TestPage;
