// 以下を追加することで、/project にアクセスされた際に、ルートにリダイレクトすることが可能
module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/project',
        destination: '/',
        permanent: true,
      },
    ]
  },
}