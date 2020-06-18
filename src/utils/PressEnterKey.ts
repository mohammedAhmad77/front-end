export const handleKeyPress = (e:any,EnterKeyFun:Function,canBeSubmitted:Function,isDisabled:boolean):void => {
     if(e.key === 'Enter') {
          e.target.blur();
          if(!canBeSubmitted() && !isDisabled){
            EnterKeyFun();
           }
        }
}