import apps from "../data/apps";

function AppList() {
  const renderedApps = apps.map((app) => {
    return (
      <div key={app.name}>
        <a href={app.url} target="blank">
          {app.name}
        </a>
      </div>
    );
  });

  return (
    <div>
      <h3>Amazing apps</h3>
      {renderedApps}
    </div>
  );
}

export default AppList;
