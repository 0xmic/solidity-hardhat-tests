const { expect } = require('chai')
const { ethers } = require('hardhat')

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('Mappings', () => {
  describe('Example 1', () => {
    it('demonstrates basic mappings with default values', async () => {
      const Contract = await ethers.getContractFactory('Mappings1')
      let contract = await Contract.deploy()
      expect(await contract.colors(1)).to.equal('Blue')
      expect(await contract.colors(2)).to.equal('Green')
      expect(await contract.colors(3)).to.equal('')
      expect(await contract.addresses(1)).to.equal('0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB')
      expect(await contract.addresses(2)).to.equal('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D')
      expect(await contract.addresses(3)).to.equal('0x0000000000000000000000000000000000000000')
      expect(await contract.hasVoted('0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB')).to.equal(true)
      expect(await contract.hasVoted('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D')).to.equal(true)
      expect(await contract.hasVoted('0x4f7d078Ed1A55a788e1e7eCD02f2c8249e2d11Ab')).to.equal(false)
    })
  })

  describe('Example 2', () => {
    it('demonstrates mappings with other data types & nested mappings', async () => {
      const Contract = await ethers.getContractFactory('Mappings2')
      let contract = await Contract.deploy()

      let result = await contract.books(1)
      expect(result[0]).to.equal('A Tale of Two Cities')
      expect(result[1]).to.equal('Charles Dickens')

      result = await contract.books(2)
      expect(result[0]).to.equal('Les Miserables')
      expect(result[1]).to.equal('Victor Hugo')

      let user1 = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB'
      let dai = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
      expect(await contract.balances(user1, dai)).to.equal(ether(1))

      let user2 = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'
      let weth = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
      expect(await contract.balances(user2, weth)).to.equal(ether(2))
    })
  })

  describe('Example 3', () => {
    it('demonstrates getting and setting values', async () => {
      const Contract = await ethers.getContractFactory('Mappings3')
      let contract = await Contract.deploy()

      await contract.set(1, 'one')
      await contract.set(2, 'two')

      expect(await contract.get(1)).to.equal('one')
      expect(await contract.get(2)).to.equal('two')

      await contract.remove(1)
      expect(await contract.get(1)).to.equal('')
    })
  })

  describe('Example 4', () => {
    it('demonstrates getting and setting nested values', async () => {
      const Contract = await ethers.getContractFactory('Mappings4')
      let contract = await Contract.deploy()

      let user1 = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB'
      let user2 = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

      await contract.set(user1, 1, true)
      await contract.set(user1, 2, true)
      await contract.set(user2, 3, true)

      expect(await contract.get(user1, 1)).to.equal(true)
      expect(await contract.get(user1, 2)).to.equal(true)
      expect(await contract.get(user2, 3)).to.equal(true)

      await contract.remove(user1, 1)
      expect(await contract.get(user1, 1)).to.equal(false)
    })
  })
})
