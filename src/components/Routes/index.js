import { Redirect, Route, Switch } from "react-router-dom";
import { Jobs } from "../../containers/Jobs";
import { Resumes } from "../../containers/Resumes";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/jobs" />
      </Route>
      <Route exact path="/jobs" component={Jobs}>
        <Jobs title={"Агентство по трудоустройству | Вакансии"} />
      </Route>
      <Route exact path="/resumes">
        <Resumes title={"Агентство по трудоустройству | Резюме"} />
      </Route>
    </Switch>
  );
};
