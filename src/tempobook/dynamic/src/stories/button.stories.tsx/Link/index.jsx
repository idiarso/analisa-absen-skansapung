
            import { Link } from "./../../../../../../stories/button.stories.tsx";

            const TempoComponent = () => {
              return Link.render(Link.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;