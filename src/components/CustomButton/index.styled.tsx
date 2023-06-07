/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

export const ActionButtonContainer = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: ${(props: any) =>
    props.theme.colors.primary ? props.theme.colors.primary : `black`};
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 0.875rem;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
`;

export const TextButtonContainer = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  text-align: left;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: baseline;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 40px);
  padding: 0px 5px;
`;
