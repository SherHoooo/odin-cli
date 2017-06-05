const origin = 'gitlab'
const userName = 'SherHoooo'

const mapTable = {
  webpack: 'test2'
}

const tranMapTable = {}
Object.entries(mapTable).forEach(item => {
  tranMapTable[item[0]] = `${origin}:${userName}/${item[1]}`
})

module.exports = tranMapTable
