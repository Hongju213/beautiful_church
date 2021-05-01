import React, { useEffect, useState } from 'react';
import Radio from './Radio';
import classNames from 'classnames';
import Input from './Input';

const defaultProps = {
  children: null,
  label: '',
  labelHidden: false,
  type: 'text',
  // name: undefined,
  status: '',
  disabled: false,
  value: undefined,
  formGroup: null,
  hasIcon: null,
  size: '',
  placeholder: '',
  rows: 3,
  hint: null
}

function PostList({ 
  className,
  children,
  label,
  labelHidden,
  type,
  // name,
  status,
  disabled,
  value,
  formGroup,
  hasIcon,
  size,
  placeholder,
  rows,
  hint,
  ...props
 }) {

  const problem = [
    {
      id: 1,
      keyword: "주보",
      title: "1. 창세기 1장1절을 외워 쓰시오.",
      answer: "태초에 하나님이 천지를 창조하시니라.",
    },
    {
      id: 2,
      keyword: "선교",
      title: "2. 하나님께서 “보시기에 좋았더라”라는 말씀이 1장에 몇 번 나오는가?",
      body: "➀6번 ➁7번 ➂8번 ➃9번",
      answer: "2"
    },
    {
      id: 3,
      keyword: "복",
      title: "3. 처음 남자와 여자에게 복을 주시며 말씀하신 내용이 아닌 것은?",
      body: "➀ 땅에 충만하라 ➁모든 생물을 다스리라 ➂땅을 정복하라 ➃모든 동.식물을 다스리라",
      answer: "4"
    },
    {
      id: 4,
      keyword: "창조",
      title: "4. 하나님께서 사람을 누구의 형상대로 창조하셨는가?(1:27)",
      answer: "하나님"
    },
    {
      id: 5,
      keyword: "퀴즈",
      title: "5. 하나님께서 사람을 무엇으로 지으셨나?",
      body: "➀ 흙 ➁나무 ➂물 ➃공기",
      answer: "1"
    },
    {
      id: 6,
      keyword: "",
      title: "6. 하나님께서 사람을 지으시고 무엇을 그 코에 불어넣으시니 사람이 생령이 되었는가?",
      body:
        "➀ 생기 ➁성령 ➂바람 ➃흙"
    }
  ];


  
  const classes = classNames(
    'text'
  );

  const textClasses = classNames(
    'form-input',
    size && `form-input-${`sm`}`,
    status && `form-${status}`,
    className
  );

  //color
  const [color, setColor] = useState('gray');
  
  const changeColor = () => {
    setColor('#FE9A2E')
  };

  //name
  const [name, setName] = useState('');
  
  //점수
  const [score, setScore] = useState(0);
  
  // 키워드
  const [keyword, setKeyword] = useState('');
  const [keyword2, setKeyword2] = useState('');
  const [keyword3, setKeyword3] = useState('');
  const [keyword4, setKeyword4] = useState('');
  const [keyword5, setKeyword5] = useState('');
  const [keyword6, setKeyword6] = useState('');
  const [keyword7, setKeyword7] = useState('');
  const [keyword8, setKeyword8] = useState('');
  const [keyword9, setKeyword9] = useState('');
  const [keyword10, setKeyword10] = useState('');
  const [keyword11, setKeyword11] = useState('');
  const [keyword12, setKeyword12] = useState('');
  const [keyword13, setKeyword13] = useState('');
  const [keyword14, setKeyword14] = useState('');
  const [keyword15, setKeyword15] = useState('');
  const [keyword16, setKeyword16] = useState('');
  const [keyword17, setKeyword17] = useState('');
  const [keyword18, setKeyword18] = useState('');
  const [keyword19, setKeyword19] = useState('');
  const [keyword20, setKeyword20] = useState('');
  const [keyword21, setKeyword21] = useState('');
  const [keyword22, setKeyword22] = useState('');
  const [keyword23, setKeyword23] = useState('');
  const [keyword24, setKeyword24] = useState('');
  const [keyword25, setKeyword25] = useState('');
  

  //answer 1~25
  const [answer, setAnswer] = useState([]);
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState([]);
  const [answer4, setAnswer4] = useState([]);
  const [answer5, setAnswer5] = useState([]);
  const [answer6, setAnswer6] = useState([]);
  const [answer7, setAnswer7] = useState([]);
  const [answer8, setAnswer8] = useState([]);
  const [answer9, setAnswer9] = useState([]);
  const [answer10, setAnswer10] = useState([]);
  const [answer11, setAnswer11] = useState([]);
  const [answer12, setAnswer12] = useState([]);
  const [answer13, setAnswer13] = useState([]);
  const [answer14, setAnswer14] = useState([]);
  const [answer15, setAnswer15] = useState([]);
  const [answer16, setAnswer16] = useState([]);
  const [answer17, setAnswer17] = useState([]);
  const [answer18, setAnswer18] = useState([]);
  const [answer19, setAnswer19] = useState([]);
  const [answer20, setAnswer20] = useState([]);
  const [answer21, setAnswer21] = useState([]);
  const [answer22, setAnswer22] = useState([]);
  const [answer23, setAnswer23] = useState([]);
  const [answer24, setAnswer24] = useState([]);
  const [answer25, setAnswer25] = useState([]);

  //제출 1~25
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmit2, setIsSubmit2] = useState(false);
  const [isSubmit3, setIsSubmit3] = useState(false);
  const [isSubmit4, setIsSubmit4] = useState(false);
  const [isSubmit5, setIsSubmit5] = useState(false);
  const [isSubmit6, setIsSubmit6] = useState(false);
  const [isSubmit7, setIsSubmit7] = useState(false);
  const [isSubmit8, setIsSubmit8] = useState(false);
  const [isSubmit9, setIsSubmit9] = useState(false);
  const [isSubmit10, setIsSubmit10] = useState(false);
  const [isSubmit11, setIsSubmit11] = useState(false);
  const [isSubmit12, setIsSubmit12] = useState(false);
  const [isSubmit13, setIsSubmit13] = useState(false);
  const [isSubmit14, setIsSubmit14] = useState(false);
  const [isSubmit15, setIsSubmit15] = useState(false);
  const [isSubmit16, setIsSubmit16] = useState(false);
  const [isSubmit17, setIsSubmit17] = useState(false);
  const [isSubmit18, setIsSubmit18] = useState(false);
  const [isSubmit19, setIsSubmit19] = useState(false);
  const [isSubmit20, setIsSubmit20] = useState(false);
  const [isSubmit21, setIsSubmit21] = useState(false);
  const [isSubmit22, setIsSubmit22] = useState(false);
  const [isSubmit23, setIsSubmit23] = useState(false);
  const [isSubmit24, setIsSubmit24] = useState(false);
  const [isSubmit25, setIsSubmit25] = useState(false);

  //정답 입력이벤트
  const handleAnswer = (e) => { setAnswer(e.target.value) }
  const handleAnswer2 = (e) => { setAnswer2(e.target.value) }
  const handleAnswer3 = (e) => { setAnswer3(e.target.value) }
  const handleAnswer4 = (e) => { setAnswer4(e.target.value) }
  const handleAnswer5 = (e) => { setAnswer5(e.target.value) }
  const handleAnswer6 = (e) => { setAnswer6(e.target.value) }
  const handleAnswer7 = (e) => { setAnswer7(e.target.value) }
  const handleAnswer8 = (e) => { setAnswer8(e.target.value) }
  const handleAnswer9 = (e) => { setAnswer9(e.target.value) }
  const handleAnswer10 = (e) => { setAnswer10(e.target.value) }
  const handleAnswer11 = (e) => { setAnswer11(e.target.value) }
  const handleAnswer12 = (e) => { setAnswer12(e.target.value) }
  const handleAnswer13 = (e) => { setAnswer13(e.target.value) }
  const handleAnswer14 = (e) => { setAnswer14(e.target.value) }
  const handleAnswer15 = (e) => { setAnswer15(e.target.value) }
  const handleAnswer16 = (e) => { setAnswer16(e.target.value) }
  const handleAnswer17 = (e) => { setAnswer17(e.target.value) }
  const handleAnswer18 = (e) => { setAnswer18(e.target.value) }
  const handleAnswer19 = (e) => { setAnswer19(e.target.value) }
  const handleAnswer20 = (e) => { setAnswer20(e.target.value) }
  const handleAnswer21 = (e) => { setAnswer21(e.target.value) }
  const handleAnswer22 = (e) => { setAnswer22(e.target.value) }
  const handleAnswer23 = (e) => { setAnswer23(e.target.value) }
  const handleAnswer24 = (e) => { setAnswer24(e.target.value) }
  const handleAnswer25 = (e) => { setAnswer25(e.target.value) }

  //정답여부
  const [check, setCheck] = useState('');

  //답안 제출이벤트
  const onSubmit = () => { if(answer?.replace(/(\s*)/g, "") === problem?.[0].answer.replace(/(\s*)/g, "")) { setCheck('true'); setScore(score+10); setIsSubmit(true)} else { setCheck('false'); setIsSubmit(true) }}
  const onSubmit2 = () => { if(answer2 === problem?.[1].answer) { setScore(score+10); setIsSubmit2(true)} else { setIsSubmit2(true) }}
  const onSubmit3 = () => { if(answer3 === problem?.[2].answer) { setScore(score+10); setIsSubmit3(true); } else { setIsSubmit3(true) }}
  const onSubmit4 = () => { if(answer4.includes(problem?.[3].answer)) { setScore(score+10); setIsSubmit4(true); } else { setIsSubmit4(true) }}
  const onSubmit5 = () => { if(answer5 === problem?.[4].answer) { setScore(score+10); setIsSubmit5(true); } else { setIsSubmit5(true) }}
  const onSubmit6 = () => { if(answer6 === problem?.[5].answer) { setScore(score+10); setIsSubmit6(true); } else { setIsSubmit6(true) }}
  const onSubmit7 = () => { if(answer7 === problem?.[6].answer) { setScore(score+10); setIsSubmit7(true); } else { setIsSubmit7(true) }}
  const onSubmit8 = () => { if(answer8 === problem?.[7].answer) { setScore(score+10); setIsSubmit8(true); } else { setIsSubmit8(true) }}
  const onSubmit9 = () => { if(answer9 === problem?.[8].answer) { setScore(score+10); setIsSubmit9(true); } else { setIsSubmit9(true) }}
  const onSubmit10 = () => { if(answer10 === problem?.[9].answer) { setScore(score+10); setIsSubmit10(true); } else { setIsSubmit10(true) }}
  const onSubmit11 = () => { if(answer11 === problem?.[10].answer) { setScore(score+10); setIsSubmit11(true)} else { setIsSubmit11(true) }}
  const onSubmit12 = () => { if(answer12 === problem?.[11].answer) { setScore(score+10); setIsSubmit12(true)} else { setIsSubmit12(true) }}
  const onSubmit13 = () => { if(answer13 === problem?.[12].answer) { setScore(score+10); setIsSubmit13(true); } else { setIsSubmit13(true) }}
  const onSubmit14 = () => { if(answer14 === problem?.[13].answer) { setScore(score+10); setIsSubmit14(true); } else { setIsSubmit14(true) }}
  const onSubmit15 = () => { if(answer15 === problem?.[14].answer) { setScore(score+10); setIsSubmit15(true); } else { setIsSubmit15(true) }}
  const onSubmit16 = () => { if(answer16 === problem?.[15].answer) { setScore(score+10); setIsSubmit16(true); } else { setIsSubmit16(true) }}
  const onSubmit17 = () => { if(answer17 === problem?.[16].answer) { setScore(score+10); setIsSubmit17(true); } else { setIsSubmit17(true) }}
  const onSubmit18 = () => { if(answer18 === problem?.[17].answer) { setScore(score+10); setIsSubmit18(true); } else { setIsSubmit18(true) }}
  const onSubmit19 = () => { if(answer19 === problem?.[18].answer) { setScore(score+10); setIsSubmit19(true); } else { setIsSubmit19(true) }}
  const onSubmit20 = () => { if(answer20 === problem?.[19].answer) { setScore(score+10); setIsSubmit20(true); } else { setIsSubmit20(true) }}
  const onSubmit21 = () => { if(answer21 === problem?.[20].answer) { setScore(score+10); setIsSubmit21(true)} else { setIsSubmit21(true) }}
  const onSubmit22 = () => { if(answer22 === problem?.[21].answer) { setScore(score+10); setIsSubmit22(true)} else { setIsSubmit22(true) }}
  const onSubmit23 = () => { if(answer23 === problem?.[22].answer) { setScore(score+10); setIsSubmit23(true); } else { setIsSubmit23(true) }}
  const onSubmit24 = () => { if(answer24 === problem?.[23].answer) { setScore(score+10); setIsSubmit24(true); } else { setIsSubmit24(true) }}
  const onSubmit25 = () => { if(answer25 === problem?.[24].answer) { setScore(score+10); setIsSubmit25(true); } else { setIsSubmit25(true) }}



  //이름입력 이벤트
  const handleName = (e) => { setName(e.target.value)}
  
  //키워드 입력 이벤트
  const handleKeyword = (e) => { setKeyword(e.target.value)}
  const handleKeyword2 = (e) => { setKeyword2(e.target.value)}
  const handleKeyword3 = (e) => { setKeyword3(e.target.value)}
  const handleKeyword4 = (e) => { setKeyword4(e.target.value)}
  const handleKeyword5 = (e) => { setKeyword5(e.target.value)}
  const handleKeyword6 = (e) => { setKeyword6(e.target.value)}
  const handleKeyword7 = (e) => { setKeyword7(e.target.value)}
  const handleKeyword8 = (e) => { setKeyword8(e.target.value)}
  const handleKeyword9 = (e) => { setKeyword9(e.target.value)}
  const handleKeyword10 = (e) => { setKeyword10(e.target.value)}

  //이름 제출여부
  const [putName, setPutName] = useState(false);

  //키워드 제출여부
  const [putKeyword, setPutKeyword] = useState(false);
  const [putKeyword2, setPutKeyword2] = useState(false);
  const [putKeyword3, setPutKeyword3] = useState(false);
  const [putKeyword4, setPutKeyword4] = useState(false);
  const [putKeyword5, setPutKeyword5] = useState(false);
  const [putKeyword6, setPutKeyword6] = useState(false);
  const [putKeyword7, setPutKeyword7] = useState(false);
  const [putKeyword8, setPutKeyword8] = useState(false);
  const [putKeyword9, setPutKeyword9] = useState(false);
  const [putKeyword10, setPutKeyword10] = useState(false);

  //이름제출
  const nameSubmit = () => { setPutName(true); changeColor()}

  //키워드제출
  const keywordSubmit = () => { if(keyword.includes(problem?.[0].keyword)) { setPutKeyword(true)}}

  const Component = type === 'textarea' ? 'textarea' : 'input';
  return (
    <>
      {/* 이름 */}
      <label className={classes} style={{display:'flex'}}>
      이름: 
      <Component
        {...props}
        type={type !== 'textarea' ? type : null}
        className={textClasses}
        disabled={putName}
        style={{width:'80px', marginLeft:'10px', height:'32px', color: color}}
        // name={name}
        value={name}
        onChange={handleName}
        rows={type === 'textarea' ? rows : null}
        />
      { !putName &&
        <button style={{marginLeft: '10px'}} className={'butttton-sm'} onClick={nameSubmit} >입력</button>
      }
      </label>

      {/* 문제 1 */}
      { putName &&
      <label className={classes} style={{display:'flex'}}>
      1번문제 키워드: 
      <Component
        {...props}
        type={type !== 'textarea' ? type : null}
        className={textClasses}
        // disabled={putName}
        style={{width:'80px', marginLeft:'10px', height:'32px'}}
        // name={name}
        value={keyword}
        onChange={handleKeyword}
        rows={type === 'textarea' ? rows : null}
        />
      <button style={{marginLeft: '10px'}} className={'butttton-sm'} onClick={keywordSubmit} >입력</button>
      </label>
      }

      { putKeyword &&
      <>
        <label className={classes}>
          <h5>{problem?.[0].title}</h5>
          <Component
            {...props}
            type={type !== 'textarea' ? type : null}
            className={textClasses}
            // name={name}
            value={answer}
            onChange={handleAnswer}
            rows={type === 'textarea' ? rows : null}
          />
        </label>
          { isSubmit === false ?
        <label style={{display: 'inline-block', textAlign: 'end'}}>
          <button style={{marginTop: '5px'}} className={'button'} onClick={onSubmit} >제출</button>
        </label> 
        : null 
        }
        { check === 'true' ? <h3>정답입니다!</h3> : null }
        { check === 'false' ? <h3>오답입니다!</h3> : null }
      </>
      }

      {/* 문제 2 */}
      { isSubmit &&
      <>
        <label className={classes}>
          <h5>{problem?.[1].title}</h5>
          <input type='radio' name='2' value={"1"} onChange={handleAnswer2} />➀6번
          <input style={{marginLeft:'20px'}} type='radio' name='2' value={"2"} onChange={handleAnswer2} />➁7번
          <input style={{marginLeft:'20px'}} type='radio' name='2' value={"3"} onChange={handleAnswer2} />➂8번
          <input style={{marginLeft:'20px'}} type='radio' name='2' value={"4"} onChange={handleAnswer2} />➃9번
        </label>
        { isSubmit2 === false ?
        <label style={{display: 'inline-block', textAlign: 'end'}}>
          <button style={{marginTop: '5px'}} className={'button'} onClick={onSubmit2} >제출</button>
        </label> 
        : null 
        }
      </>
      }

      {/* 문제 3 */}
      { isSubmit2 &&
      <>
        <label className={classes}>
          <h5>{problem?.[2].title}</h5>
          <input type='radio' name='3' value={"1"} onChange={handleAnswer3} />➀ 땅에 충만하라 
          <input style={{marginLeft:'20px'}} type='radio' name='3' value={"2"} onChange={handleAnswer3} />➁모든 생물을 다스리라 
          <input style={{marginLeft:'20px'}} type='radio' name='3' value={"3"} onChange={handleAnswer3} />➂땅을 정복하라 
          <input style={{marginLeft:'20px'}} type='radio' name='3' value={"4"} onChange={handleAnswer3} />➃모든 동.식물을 다스리라
        </label>
        { isSubmit3 === false ?
        <label style={{display: 'inline-block', textAlign: 'end'}}>
          <button style={{marginTop: '5px'}} className={'button'} onClick={onSubmit3} >제출</button>
        </label> 
        : null 
        }
      </>
      }

      {/* 문제 4 */}
      { 
      isSubmit3 &&
      <>
      <label className={classes}>
        <h5>{problem?.[3].title}</h5>
        <Component
          {...props}
          type={type !== 'textarea' ? type : null}
          className={textClasses}
          // name={name}
          value={answer4}
          onChange={handleAnswer4}
          rows={type === 'textarea' ? rows : null}
        />
      </label>
      { isSubmit4 === false ?
      <label style={{display: 'inline-block', textAlign: 'end'}}>
        <button style={{marginTop: '5px'}} className={'button'} onClick={onSubmit4} >제출</button>
      </label> 
      : null 
      }
      </>
      }

      {/* 문제 5 */}
      { isSubmit4 &&
      <>
        <label className={classes}>
          <h5>{problem?.[4].title}</h5>
          <input type='radio' name='5' value={"1"} onChange={handleAnswer5} />➀ 흙 
          <input style={{marginLeft:'20px'}} type='radio' name='5' value={"2"} onChange={handleAnswer5} />➁나무  
          <input style={{marginLeft:'20px'}} type='radio' name='5' value={"3"} onChange={handleAnswer5} />➂물  
          <input style={{marginLeft:'20px'}} type='radio' name='5' value={"4"} onChange={handleAnswer5} />➃공기
        </label>
        { isSubmit5 === false ?
        <label style={{display: 'inline-block', textAlign: 'end'}}>
          <button style={{marginTop: '5px'}} className={'button'} onClick={onSubmit5} >제출</button>
        </label> 
        : null 
        }
      </>
      }

      {/* 점수 */}
      <div style={{display:'inline-block', position: "fixed", top: '10%', left: '60%', right: 0, width:'20%'}}>
        <label className={classes} style={{display:'inline-block'}}>
            <h5 style={{color: color}}> {name} 성도님의 현재점수: {score} </h5>
        </label>
      </div>
      <div style={{display:'inline-block', position: "fixed", top: '20%', left: '60%', right: 0, width:'20%'}}>
        { 
        isSubmit &&
        isSubmit2 &&
        isSubmit3 &&
        isSubmit4 &&
        isSubmit5 &&
        <label className={classes} style={{display:'inline-block'}}>
            <h5 style={{color: 'white'}}> {name} 성도님의 최종점수: {score} </h5>
        </label>
        }
      </div>
    </>
  );

}

PostList.defaultProps = defaultProps;

export default PostList;
