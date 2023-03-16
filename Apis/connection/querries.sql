--creating tables:

-- Table: public.alerts

-- DROP TABLE IF EXISTS public.alerts;

CREATE TABLE IF NOT EXISTS public.alerts
(
    alert_id integer NOT NULL DEFAULT nextval('alerts_alert_id_seq'::regclass),
    alert_type text COLLATE pg_catalog."default" NOT NULL,
    alert_identifier uuid NOT NULL,
    alert_description text[] COLLATE pg_catalog."default",
    alert_audio bytea,
    alert_video bytea,
    alert_file bytea
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.alerts
    OWNER to alatpres;

COMMENT ON TABLE public.alerts
    IS 'official alerts storage database.';

COMMENT ON COLUMN public.alerts.alert_id
    IS 'serialized id';


--inserting data:

-- Table: public.alerts:
INSERT INTO public.alerts(
	alert_id, alert_type, alert_identifier, alert_description, alert_audio, alert_video, alert_file)
	VALUES (?, ?, ?, ?, ?, ?, ?);