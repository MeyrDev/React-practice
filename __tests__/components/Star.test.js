import {shallow} from 'enzyme'
import Star from '../../src/components/Colors/ui/Star'

describe("<Star /> UI Component", () => {
    it("renders default star", () => {
        expect(
            shallow(<Star />)
                .find('div.star')
                .length
        ).toBe(1)
    })

    it('renders clicked Star', () => {
        expect(
            shallow(<Star selected={true} />)
                .find('div.selected.star.some')
                .length
        ).toBe(1)
    })
})