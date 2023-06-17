import styled from 'styled-components'

const FilterButton = ({children}) => {
  return (
    <FilterButtonStyle>
      <div className="icon">{children}</div>
    </FilterButtonStyle>
  )
}

export default FilterButton

const FilterButtonStyle = styled.div`
  .icon {
    display: flex;
    padding: 4px 18px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 8px;
    height: 32px;
    white-space: nowrap;
    .icon_image {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      margin-top: 1px;
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 16px 0px #000a3c1a;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  }

  .css {
    fill: #1572b6;
  }

  .eslint {
    fill: #4b32c3;
  }

  .font-awesome {
    fill: #528dd7;
  }

  .gatsby {
    fill: #663399;
  }

  .html {
    fill: #e34f26;
  }

  .javascript {
    fill: #f7df1e;
  }

  .next_js,
  .notion {
    fill: #000000;
  }

  .styled-components {
    fill: #db7093;
  }

  .typescript {
    fill: #3178c6;
  }

  .vue {
    fill: #4fc08d;
  }
`