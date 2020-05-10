/** @jsx jsx */
import { jsx, Heading, Text, Container } from "theme-ui";
import { Stack } from "raam";
import MainLayout from "../templates/MainLayout";

const IndexPage = () => (
  <MainLayout title="Home">
    <Container px={["3", null, null, null, "0"]} py="7">
      <Stack gap="3">
        <Heading variant="heading">Hello World</Heading>
        <Text variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          diam donec adipiscing tristique risus nec feugiat in. Est ullamcorper
          eget nulla facilisi etiam dignissim diam. Sed odio morbi quis commodo
          odio. Mattis pellentesque id nibh tortor id. Enim nunc faucibus a
          pellentesque sit amet porttitor eget dolor. Aliquet enim tortor at
          auctor urna nunc id cursus metus. Facilisi nullam vehicula ipsum a
          arcu. Sed ullamcorper morbi tincidunt ornare massa eget egestas.
          Faucibus scelerisque eleifend donec pretium vulputate. Aenean pharetra
          magna ac placerat vestibulum lectus mauris. Molestie nunc non blandit
          massa enim nec dui. Velit scelerisque in dictum non consectetur a
          erat. Consequat interdum varius sit amet mattis vulputate enim nulla.
          Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.
        </Text>
      </Stack>
    </Container>
  </MainLayout>
);

export default IndexPage;
