const Platform = () => {
  const PLATFORMS = [{ value: "gitlab", label: "GitLab" }];
  return (
    <form className="p-4 bg-white rounded shadow">
      <label
        className="block mb-2 text-lg font-medium text-gray-700"
        htmlFor="platform"
      >
        1. Select your CI/CD platform
      </label>
      <select
        id="platform"
        name="platform"
        className="block w-1/4 mx-auto p-2 border border-gray-300 rounded"
        defaultValue=""
      >
        <option value="" disabled>
          None selected
        </option>
        {PLATFORMS.map((platform) => {
          return <option value={platform.value}>{platform.label}</option>;
        })}
      </select>
    </form>
  );
};

export default Platform;
