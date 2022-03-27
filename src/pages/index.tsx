import { Container, InputSelectionWithSearch, Button, BreadCrumbList, Loader } from '@components/common'

const Dashboard = () => {
  return (
    <Container>
      <InputSelectionWithSearch />

      <Button name='จ่ายงาน' />

      <BreadCrumbList />
      <Loader />
    </Container>
  )
}

export default Dashboard
