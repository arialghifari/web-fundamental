class DataSource {
  static async searchClub(keyword) {
    try {
      const res = await fetch(
        `https://sports-api.dicoding.dev/teams/search?t=${keyword}`
      );
      const data = await res.json();

      if (data.teams.length === 0) {
        return Promise.reject(`${keyword} is not found`);
      } else {
        return Promise.resolve(data.teams);
      }
    } catch (rejectMessage) {
      return Promise.reject(rejectMessage);
    }
  }
}

export default DataSource;
