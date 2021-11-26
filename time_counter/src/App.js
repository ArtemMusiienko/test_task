import React from "react";
import { useEffect, useState,} from "react";
import { interval, Subject } from "rxjs";
import "./index"
import {takeUntil} from 'rxjs/operators';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState("stop");
  useEffect(() => {
  
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (status === "run") {
          setSeconds(val => val + 1000);
        }
      });

    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [status]);
 
  const start = React.useCallback(() => {
    setStatus("run");
  }, []);
 
  const stop = React.useCallback(() => {
    setStatus("stop");
    setSeconds(0);
  }, []);
 
  const reset = React.useCallback(() => {
    setSeconds(0);
  }, []);
 
  const wait = React.useCallback(() => {
    setStatus("wait");
  },[]);
 
  return (
    <>
      <div className="time-container"> 
      {new Date(seconds).toISOString().slice(11, 19)}
      </div>
      <div className="buttons-container">
      <button className="button" onClick={start}>
        Start
      </button>
      <button className="button" onClick={stop}>
        Stop
      </button>
      <button className="button" onClick={reset}>
        Reset</button>
      <button className="button" onClick={wait}>
        Wait</button>
      </div>
   </>
  )}
