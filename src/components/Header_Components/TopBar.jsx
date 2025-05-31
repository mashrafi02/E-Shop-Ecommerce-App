
import Container from '../../Pagelayouts/Container';
import TopLeft from './TopBar_Components/TopLeft';
import TopRight from './TopBar_Components/TopRight';

const TopBar = () => {
  return (
    <section className='border-b border-[#BFBFBF]'>
        <Container>
            <section className='flex justify-between items-center py-[22px]'>
              <TopLeft />
              <TopRight />
            </section>
        </Container>
    </section>
  )
}

export default TopBar