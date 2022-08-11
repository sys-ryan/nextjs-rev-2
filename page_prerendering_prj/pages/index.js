import EventList from "../components/events/event-list";

import { getFeaturedEvents } from "../helpers/api-util";

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

function HomePage(props) {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export default HomePage;
