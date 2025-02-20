
            import { Loading } from "./../../../../../../stories/button.stories.tsx";

            const TempoComponent = () => {
              return Loading.render(Loading.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;